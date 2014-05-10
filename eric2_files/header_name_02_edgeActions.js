
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Eric}","mouseover",function(sym,e){var flag=sym.getVariable("flag");if(flag)
{sym.play("spin");sym.setVariable("flag",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Freistadt}","mouseover",function(sym,e){var flag=sym.getVariable("flag");if(flag==false)
{sym.play("back");sym.setVariable("flag",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("flag",false);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-101441394");