(function(){
    console.log("init.js called");
    var obj = Agtk;
    obj.plugins = [];
    //obj.plugins.valid = false;
    obj.plugins.isValid = function(plugin, pluginId, locale){
        var result = { success: false, error: null, line: null };
        console.log("isValid called");
        if(typeof plugin !== 'object'){
            result.error = 'The plugin is not a JavaScript object.' + JSON.stringify(plugin);
            return result;
        }
        var funcNameList = ['getInfo', 'initialize', 'finalize', 'setLocale', 'call'];
        for(var len = funcNameList.length, i = 0; i < len; i++){
            var funcName = funcNameList[i];
            if(!(funcName in plugin)){
                result.error = 'The plugin does not have "' + funcName + '".';
                return result;
            }
        }
        plugin.setLocale(locale);
        var paramNameList = ['name', 'description', 'author', 'help', 'pluginType'];
        for(var paramName in paramNameList){
            try {
                plugin.getInfo(paramName);
            } catch (error) {
                result.error = 'Error at calling "' + funcName + '": ' + error.toString();
                return result;
            }
        }
        result.success = true;
        return result;
    };
    obj.plugins.reload = function(plugin, pluginId, locale, internal, paramValue){
        plugin.id = pluginId;
        plugin.setLocale(locale);
        var index = -1;
        for(var i = 0; i < obj.plugins.length; i++){
            var p = obj.plugins[i];
            if(p.id == pluginId){
                index = i;
                break;
            }
        }
        console.log("obj.plugins.reload: " + [index, obj.plugins.length, pluginId, JSON.stringify(internal), JSON.stringify(paramValue)].join(", "));
        if(index >= 0){
            try {
                internal = p.getInfo('internal');
                p.finalize();
            } catch (error) {
                console.log("getInfo('internal')/finalize(): error: " + error.toString());
            }
            obj.plugins[index] = plugin;
        } else {
            index = obj.plugins.length;
            obj.plugins.push(plugin);
        }
        console.log("obj.plugins.reload: " + [index, obj.plugins.length].join(", "));
        plugin.initialize(internal);
        if(plugin.setParamValue){
            plugin.setParamValue(paramValue);
        }
        return;
    };
    obj.plugins.unload = function(pluginId){
        for(var i = 0; i < obj.plugins.length; i++){
            var p = obj.plugins[i];
            if(p.id == pluginId){
                var internal = undefined;
                try {
                    internal = p.getInfo('internal');
                    p.finalize();
                } catch (error) {
                    console.log("getInfo('internal')/finalize(): error: " + error.toString());
                }
                obj.plugins.splice(i, 1);
                return internal;
            }
        }
        return undefined;
    }
    obj.plugins.getIndexById = function(pluginId){
        console.log("obj.plugins.getIndexById: " + pluginId);
        var index = -1;
        for(var i = 0; i < obj.plugins.length; i++){
            var p = obj.plugins[i];
            if(p.id == pluginId){
                index = i;
                break;
            }
        }
        console.log("obj.plugins.getIndexById: ret: " + index);
        return index;
    };
    obj.plugins.getById = function(pluginId){
        //console.log("obj.plugins.getById: " + pluginId);
        var index = -1;
        for(var i = 0; i < obj.plugins.length; i++){
            var p = obj.plugins[i];
            if(p.id == pluginId){
                return p;
            }
        }
        return null;
    };
    obj.plugins.get = function(pluginId, propertyName, extra){
        for(var i = 0; i < obj.plugins.length; i++){
            var p = obj.plugins[i];
            if(p.id == pluginId){
                if(propertyName == 'actionCommandName'){
                    var actionCommand = p.getInfo('actionCommand');
                    if(actionCommand != null && typeof actionCommand === 'object'){
                        for(var len = actionCommand.length, j = 0; j < len; j++){
                            if(actionCommand[j].id == extra){
                                return actionCommand[j].name;
                            }
                        }
                    }
                    return undefined;
                }
                return undefined;
            }
        }
        return undefined;
    };
    obj.plugins.updatePlugins = function(dt){
        //console.log("Agtk.updatePlugins called: " + [dt, this]);
        for(var i = 0; i < Agtk.plugins.length; i++){
            var plugin = Agtk.plugins[i];
            if(plugin.update){
                plugin.update(dt);
            }
        }
    };
    obj.plugins.setLocalePlugins = function(locale){
        //console.log("Agtk.updatePlugins called: " + [dt, this]);
        for(var i = 0; i < Agtk.plugins.length; i++){
            var plugin = Agtk.plugins[i];
            if(plugin.setLocale){
                plugin.setLocale(locale);
            }
        }
    };
    obj.plugins.unloadPlugins = function(){
        console.log("Agtk.unloadPlugins called");
        for(var i = obj.plugins.length - 1; i >= 0; i--){
            var plugin = Agtk.plugins[i];
            Agtk.plugins.unload(plugin.id);
        }
    }
    obj.plugins.getPluginInternals = function(){
        console.log("Agtk.getPluginInternals called");
        var internals = {};
        for(var i = 0; i < obj.plugins.length; i++){
            var plugin = Agtk.plugins[i];
            internals[plugin.id] = plugin.getInfo('internal');
        }
        return JSON.stringify(internals);
    }
    obj.plugins.setPluginInternals = function(json){
        console.log("Agtk.setPluginInternals called");
        var internals = {};
        try {
            internals = JSON.parse(json);
        } catch(e){
            console.log("Error: " + e);
        }
        for(var i = 0; i < obj.plugins.length; i++){
            var plugin = Agtk.plugins[i];
            if('setInternal' in plugin){
                var value = null;
                if(plugin.id in internals){
                    value = internals[plugin.id];
                }
                plugin.setInternal(value);
            }
        }
    }
    obj.plugins.execActionCommand = function(pluginId, index, valueJsonStr, objectId, instanceId, actionId, commandId){
        //console.log("Agtk.execActionCommand called: " + [pluginId, index, valueJsonStr, objectId, instanceId, actionId, commandId]);
        var plugin = Agtk.plugins.getById(pluginId);
        if(plugin != null){
            if(plugin.execActionCommand){
                return plugin.execActionCommand(index, JSON.parse(valueJsonStr), objectId, instanceId, actionId, commandId);
            }
        }
        //pluginId, index, cmd->getValueJson(), _objectData->getId(), _object->getInstanceId(), this->getId(), commandData->getId());
    }
    //var console = function(){
    //};
    obj.others = 'others';
    //console.log("plugins: " + plugins);
    //var obj = {"plugins": plugins, "others": 'others'};
    console.log("plugins: " + JSON.stringify(obj));
    //obj.plugins.isValid(obj, 'en');
}())
