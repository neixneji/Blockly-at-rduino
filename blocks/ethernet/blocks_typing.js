//***********************************************************
//                      www.blynk.cc by Mr Leroy
//***********************************************************

//****************************blynk_cc.js********************

Blockly.Blocks.ethernet_begin_dhcp_client.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_mac_address.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_client_begin.getBlockType = function() {
   return Blockly.Types.NUMBER;
};

Blockly.Blocks.ethernet_client_for_server.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};

Blockly.Blocks.ethernet_localip.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_available.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.ethernet_connected.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.ethernet_connect.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_print.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_println.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_stop.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_read.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_get_request.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_post_request.getBlockType = function() {
   return Blockly.Types.NUMBER;
};


//****PARSER****
Blockly.Blocks.ethernet_PARSER_end.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.ethernet_PARSER_count.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.ethernet_PARSER_getmyparam.getBlockType = function() {
   return Blockly.Types.TEXT;
};
//****WIFI****
Blockly.Blocks.ethernet_client_for_wifi_server.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.ethernet_wifi_localip.getBlockType = function() {
   return Blockly.Types.NUMBER;
};

