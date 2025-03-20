import * as THREE from 'three';

/**
 * RoundedBoxGeometry
 * 
 * Creates a box geometry with rounded corners
 */
export class RoundedBoxGeometry extends THREE.BufferGeometry {
    constructor(width = 1, height = 1, depth = 1, radius = 0.1, segments = 4) {
        super();
        
        // Validate parameters
        width = Math.abs(width);
        height = Math.abs(height);
        depth = Math.abs(depth);
        radius = Math.min(Math.abs(radius), Math.min(width, height, depth) / 2);
        segments = Math.floor(Math.max(2, segments));
        
        // Store construction parameters
        this.parameters = {
            width,
            height,
            depth,
            radius,
            segments
        };
        
        // Calculate the actual dimensions
        const actualWidth = width - radius * 2;
        const actualHeight = height - radius * 2;
        const actualDepth = depth - radius * 2;
        
        // Generate vertices, normals and uvs
        const vertices = [];
        const normals = [];
        const uvs = [];
        const indices = [];
        
        // Generate each segment
        this._generateBoxWithRoundedEdges(
            actualWidth, actualHeight, actualDepth, radius, segments,
            vertices, normals, uvs, indices
        );
        
        // Build geometry
        this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        this.setIndex(indices);
    }
    
    _generateBoxWithRoundedEdges(width, height, depth, radius, segments, vertices, normals, uvs, indices) {
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const halfDepth = depth / 2;
        
        // Track vertex count to build indices
        let vertexCount = 0;
        
        // Function to add a box face
        const addFace = (corners, normalDirection) => {
            const startVertex = vertices.length / 3;
            const segmentSize = 1 / segments;
            
            // Create vertices in a grid
            for (let y = 0; y <= segments; y++) {
                for (let x = 0; x <= segments; x++) {
                    // Calculate interpolation factors
                    const u = x * segmentSize;
                    const v = y * segmentSize;
                    
                    // Interpolate position
                    const point = new THREE.Vector3();
                    point.lerpVectors(
                        new THREE.Vector3().lerpVectors(corners[0], corners[1], u),
                        new THREE.Vector3().lerpVectors(corners[3], corners[2], u),
                        v
                    );
                    
                    // Add vertex position
                    vertices.push(point.x, point.y, point.z);
                    
                    // Add normal
                    normals.push(normalDirection.x, normalDirection.y, normalDirection.z);
                    
                    // Add UV
                    uvs.push(u, v);
                    
                    // Create faces (triangles) for the grid
                    if (x < segments && y < segments) {
                        const a = startVertex + y * (segments + 1) + x;
                        const b = startVertex + y * (segments + 1) + x + 1;
                        const c = startVertex + (y + 1) * (segments + 1) + x + 1;
                        const d = startVertex + (y + 1) * (segments + 1) + x;
                        
                        // Add two triangles for each grid cell
                        indices.push(a, b, d);
                        indices.push(b, c, d);
                    }
                }
            }
            
            vertexCount += (segments + 1) * (segments + 1);
        };
        
        // Function to add a rounded corner
        const addCorner = (position, normalX, normalY, normalZ, uDirection, vDirection) => {
            const startVertex = vertices.length / 3;
            
            // Generate vertices on the sphere at this corner
            for (let y = 0; y <= segments; y++) {
                for (let x = 0; x <= segments; x++) {
                    // Calculate interpolation factors
                    const u = x / segments;
                    const v = y / segments;
                    
                    // Calculate the angles
                    const theta = (uDirection * u + (1 - uDirection) * (1 - u)) * Math.PI / 2;
                    const phi = (vDirection * v + (1 - vDirection) * (1 - v)) * Math.PI / 2;
                    
                    // Calculate direction vector on the sphere
                    const nx = normalX * Math.cos(theta) * Math.cos(phi);
                    const ny = normalY * Math.sin(phi);
                    const nz = normalZ * Math.sin(theta) * Math.cos(phi);
                    
                    // Calculate position
                    const px = position.x + nx * radius;
                    const py = position.y + ny * radius;
                    const pz = position.z + nz * radius;
                    
                    // Add vertex
                    vertices.push(px, py, pz);
                    
                    // Add normal
                    normals.push(nx, ny, nz);
                    
                    // Add UV
                    uvs.push(u, v);
                    
                    // Create faces (triangles) for the grid
                    if (x < segments && y < segments) {
                        const a = startVertex + y * (segments + 1) + x;
                        const b = startVertex + y * (segments + 1) + x + 1;
                        const c = startVertex + (y + 1) * (segments + 1) + x + 1;
                        const d = startVertex + (y + 1) * (segments + 1) + x;
                        
                        // Add two triangles for each grid cell
                        indices.push(a, b, d);
                        indices.push(b, c, d);
                    }
                }
            }
            
            vertexCount += (segments + 1) * (segments + 1);
        };
        
        // Function to add a rounded edge
        const addEdge = (start, end, normalX, normalY, normalZ, uDirection) => {
            const startVertex = vertices.length / 3;
            const direction = new THREE.Vector3().subVectors(end, start).normalize();
            const tangent = new THREE.Vector3(normalX, normalY, normalZ);
            const binormal = new THREE.Vector3().crossVectors(tangent, direction).normalize();
            
            // Generate vertices along the edge
            for (let y = 0; y <= segments; y++) {
                for (let x = 0; x <= segments; x++) {
                    // Calculate interpolation factors
                    const u = x / segments;  // along the edge
                    const v = y / segments;  // around the edge
                    
                    // Calculate position along the edge
                    const position = new THREE.Vector3().lerpVectors(start, end, u);
                    
                    // Calculate angle around the edge
                    const theta = (uDirection * v + (1 - uDirection) * (1 - v)) * Math.PI / 2;
                    
                    // Calculate normal direction
                    const nx = Math.cos(theta) * tangent.x + Math.sin(theta) * binormal.x;
                    const ny = Math.cos(theta) * tangent.y + Math.sin(theta) * binormal.y;
                    const nz = Math.cos(theta) * tangent.z + Math.sin(theta) * binormal.z;
                    
                    // Calculate final position
                    const px = position.x + nx * radius;
                    const py = position.y + ny * radius;
                    const pz = position.z + nz * radius;
                    
                    // Add vertex
                    vertices.push(px, py, pz);
                    
                    // Add normal
                    normals.push(nx, ny, nz);
                    
                    // Add UV
                    uvs.push(u, v);
                    
                    // Create faces (triangles) for the grid
                    if (x < segments && y < segments) {
                        const a = startVertex + y * (segments + 1) + x;
                        const b = startVertex + y * (segments + 1) + x + 1;
                        const c = startVertex + (y + 1) * (segments + 1) + x + 1;
                        const d = startVertex + (y + 1) * (segments + 1) + x;
                        
                        // Add two triangles for each grid cell
                        indices.push(a, b, d);
                        indices.push(b, c, d);
                    }
                }
            }
            
            vertexCount += (segments + 1) * (segments + 1);
        };
        
        // Define the 8 corner points
        const cornerPoints = [
            // Front face corners (0-3)
            new THREE.Vector3(-halfWidth, -halfHeight, halfDepth),  // bottom-left-front
            new THREE.Vector3(halfWidth, -halfHeight, halfDepth),   // bottom-right-front
            new THREE.Vector3(halfWidth, halfHeight, halfDepth),    // top-right-front
            new THREE.Vector3(-halfWidth, halfHeight, halfDepth),   // top-left-front
            
            // Back face corners (4-7)
            new THREE.Vector3(-halfWidth, -halfHeight, -halfDepth), // bottom-left-back
            new THREE.Vector3(halfWidth, -halfHeight, -halfDepth),  // bottom-right-back
            new THREE.Vector3(halfWidth, halfHeight, -halfDepth),   // top-right-back
            new THREE.Vector3(-halfWidth, halfHeight, -halfDepth)   // top-left-back
        ];
        
        // Add the 6 faces
        // Front
        addFace([
            new THREE.Vector3(-halfWidth, -halfHeight, halfDepth + radius),
            new THREE.Vector3(halfWidth, -halfHeight, halfDepth + radius),
            new THREE.Vector3(halfWidth, halfHeight, halfDepth + radius),
            new THREE.Vector3(-halfWidth, halfHeight, halfDepth + radius)
        ], new THREE.Vector3(0, 0, 1));
        
        // Back
        addFace([
            new THREE.Vector3(halfWidth, -halfHeight, -halfDepth - radius),
            new THREE.Vector3(-halfWidth, -halfHeight, -halfDepth - radius),
            new THREE.Vector3(-halfWidth, halfHeight, -halfDepth - radius),
            new THREE.Vector3(halfWidth, halfHeight, -halfDepth - radius)
        ], new THREE.Vector3(0, 0, -1));
        
        // Top
        addFace([
            new THREE.Vector3(-halfWidth, halfHeight + radius, halfDepth),
            new THREE.Vector3(halfWidth, halfHeight + radius, halfDepth),
            new THREE.Vector3(halfWidth, halfHeight + radius, -halfDepth),
            new THREE.Vector3(-halfWidth, halfHeight + radius, -halfDepth)
        ], new THREE.Vector3(0, 1, 0));
        
        // Bottom
        addFace([
            new THREE.Vector3(-halfWidth, -halfHeight - radius, -halfDepth),
            new THREE.Vector3(halfWidth, -halfHeight - radius, -halfDepth),
            new THREE.Vector3(halfWidth, -halfHeight - radius, halfDepth),
            new THREE.Vector3(-halfWidth, -halfHeight - radius, halfDepth)
        ], new THREE.Vector3(0, -1, 0));
        
        // Right
        addFace([
            new THREE.Vector3(halfWidth + radius, -halfHeight, halfDepth),
            new THREE.Vector3(halfWidth + radius, -halfHeight, -halfDepth),
            new THREE.Vector3(halfWidth + radius, halfHeight, -halfDepth),
            new THREE.Vector3(halfWidth + radius, halfHeight, halfDepth)
        ], new THREE.Vector3(1, 0, 0));
        
        // Left
        addFace([
            new THREE.Vector3(-halfWidth - radius, -halfHeight, -halfDepth),
            new THREE.Vector3(-halfWidth - radius, -halfHeight, halfDepth),
            new THREE.Vector3(-halfWidth - radius, halfHeight, halfDepth),
            new THREE.Vector3(-halfWidth - radius, halfHeight, -halfDepth)
        ], new THREE.Vector3(-1, 0, 0));
        
        // Add the 12 edges
        // Front face edges
        addEdge(
            new THREE.Vector3(-halfWidth, -halfHeight, halfDepth + radius),
            new THREE.Vector3(halfWidth, -halfHeight, halfDepth + radius),
            0, -1, 0, 0
        );
        addEdge(
            new THREE.Vector3(halfWidth, -halfHeight, halfDepth + radius),
            new THREE.Vector3(halfWidth, halfHeight, halfDepth + radius),
            1, 0, 0, 0
        );
        addEdge(
            new THREE.Vector3(halfWidth, halfHeight, halfDepth + radius),
            new THREE.Vector3(-halfWidth, halfHeight, halfDepth + radius),
            0, 1, 0, 0
        );
        addEdge(
            new THREE.Vector3(-halfWidth, halfHeight, halfDepth + radius),
            new THREE.Vector3(-halfWidth, -halfHeight, halfDepth + radius),
            -1, 0, 0, 0
        );
        
        // Back face edges
        addEdge(
            new THREE.Vector3(-halfWidth, -halfHeight, -halfDepth - radius),
            new THREE.Vector3(halfWidth, -halfHeight, -halfDepth - radius),
            0, -1, 0, 1
        );
        addEdge(
            new THREE.Vector3(halfWidth, -halfHeight, -halfDepth - radius),
            new THREE.Vector3(halfWidth, halfHeight, -halfDepth - radius),
            1, 0, 0, 1
        );
        addEdge(
            new THREE.Vector3(halfWidth, halfHeight, -halfDepth - radius),
            new THREE.Vector3(-halfWidth, halfHeight, -halfDepth - radius),
            0, 1, 0, 1
        );
        addEdge(
            new THREE.Vector3(-halfWidth, halfHeight, -halfDepth - radius),
            new THREE.Vector3(-halfWidth, -halfHeight, -halfDepth - radius),
            -1, 0, 0, 1
        );
        
        // Connecting edges
        addEdge(
            new THREE.Vector3(-halfWidth, -halfHeight, halfDepth + radius),
            new THREE.Vector3(-halfWidth, -halfHeight, -halfDepth - radius),
            -1, -1, 0, 0
        );
        addEdge(
            new THREE.Vector3(halfWidth, -halfHeight, halfDepth + radius),
            new THREE.Vector3(halfWidth, -halfHeight, -halfDepth - radius),
            1, -1, 0, 0
        );
        addEdge(
            new THREE.Vector3(halfWidth, halfHeight, halfDepth + radius),
            new THREE.Vector3(halfWidth, halfHeight, -halfDepth - radius),
            1, 1, 0, 0
        );
        addEdge(
            new THREE.Vector3(-halfWidth, halfHeight, halfDepth + radius),
            new THREE.Vector3(-halfWidth, halfHeight, -halfDepth - radius),
            -1, 1, 0, 0
        );
        
        // Add the 8 corners
        // Front face corners
        addCorner(
            new THREE.Vector3(-halfWidth, -halfHeight, halfDepth),
            -1, -1, 1, 0, 0
        );
        addCorner(
            new THREE.Vector3(halfWidth, -halfHeight, halfDepth),
            1, -1, 1, 1, 0
        );
        addCorner(
            new THREE.Vector3(halfWidth, halfHeight, halfDepth),
            1, 1, 1, 1, 1
        );
        addCorner(
            new THREE.Vector3(-halfWidth, halfHeight, halfDepth),
            -1, 1, 1, 0, 1
        );
        
        // Back face corners
        addCorner(
            new THREE.Vector3(-halfWidth, -halfHeight, -halfDepth),
            -1, -1, -1, 0, 0
        );
        addCorner(
            new THREE.Vector3(halfWidth, -halfHeight, -halfDepth),
            1, -1, -1, 1, 0
        );
        addCorner(
            new THREE.Vector3(halfWidth, halfHeight, -halfDepth),
            1, 1, -1, 1, 1
        );
        addCorner(
            new THREE.Vector3(-halfWidth, halfHeight, -halfDepth),
            -1, 1, -1, 0, 1
        );
    }
}

// Register as a Three.js class
// THREE.RoundedBoxGeometry = RoundedBoxGeometry;

export default RoundedBoxGeometry;