document.addEventListener('DOMContentLoaded', function() {
    const aiAnimation = document.querySelector('.ai-animation');
    const nodes = aiAnimation.querySelectorAll('.node');

    function setNodePositions() {
        nodes.forEach((node, index) => {
            node.style.left = `${Math.random() * 100}%`;
            node.style.top = `${Math.random() * 100}%`;
            node.style.animation = `float ${5 + index}s ease-in-out infinite`;
            node.style.animationDelay = `${index * 0.5}s`;
        });
    }

    function createConnection(node1, node2) {
        const connection = document.createElement('div');
        connection.classList.add('connection');
        aiAnimation.appendChild(connection);

        function updateConnection() {
            const rect1 = node1.getBoundingClientRect();
            const rect2 = node2.getBoundingClientRect();
            const angle = Math.atan2(rect2.top - rect1.top, rect2.left - rect1.left);
            const distance = Math.sqrt(Math.pow(rect2.left - rect1.left, 2) + Math.pow(rect2.top - rect1.top, 2));

            connection.style.width = `${distance}px`;
            connection.style.left = `${rect1.left + rect1.width / 2}px`;
            connection.style.top = `${rect1.top + rect1.height / 2}px`;
            connection.style.transform = `rotate(${angle}rad)`;
        }

        updateConnection();
        return updateConnection;
    }

    let connectionUpdaters = [];

    function setupConnections() {
        // Clear existing connections
        aiAnimation.querySelectorAll('.connection').forEach(conn => conn.remove());
        connectionUpdaters = [];

        for (let i = 0; i < nodes.length - 1; i++) {
            connectionUpdaters.push(createConnection(nodes[i], nodes[i + 1]));
        }
        connectionUpdaters.push(createConnection(nodes[nodes.length - 1], nodes[0]));
    }

    function updateAllConnections() {
        connectionUpdaters.forEach(updater => updater());
    }

    setNodePositions();
    setupConnections();

    // Update connections periodically
    setInterval(updateAllConnections, 50);

    // Recalculate on window resize
    window.addEventListener('resize', () => {
        setNodePositions();
        setupConnections();
    });
});