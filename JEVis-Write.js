const axios = require("axios");
module.exports = function(RED) {
    const axios = require('axios');
    function JEVisWrite(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.jevisid = config.jevisid;
        node.configuration = RED.nodes.getNode(config.configuration);
        this.on('input', function (msg, send, done) {
            try{
                let url =  node.configuration.host+"/JEWebService/v1/objects/"+node.jevisid+"/attributes/Value/samples";
                console.log("Write data  into JEVis ID:" + node.jevisid);
                axios({
                    method: 'post',
                    url: url,
                    auth: {
                        username:node.configuration.credentials.username,
                        password: node.configuration.credentials.password
                    },
                    data:msg.payload
                }).then(function (response){
                    date = Date()
                    node.status({fill:"green", shape: "dot", text: "Successfully Written"})
                    console.log(response);
                    done();
                }).catch(reason => {
                    node.status({fill: "red", shape: "dot", text: reason});
                    done();
                });
            }catch (e){
                node.status({fill: "red", shape: "dot", text: e});
                done();
            }



        });
    }
    RED.nodes.registerType("JEVis-Write",JEVisWrite);
}