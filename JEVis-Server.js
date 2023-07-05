module.exports = function(RED) {
    /*
    Configuration node functions
    */
    function ConfigurationNode(n) {
        RED.nodes.createNode(this,n);
        this.username = n.username;
        this.password = n.password;
        this.host = n.host;
    }
    RED.nodes.registerType("JEVis-Server",ConfigurationNode,{
        credentials: {
            username: {type:"text"},
            password: {type:"password"}
        }
    });
}