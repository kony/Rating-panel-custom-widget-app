package com.konylabs.customwidget;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;

import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.ui.KonyCustomWidget;

public class ND_com_kony extends JSLibrary {

 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new RatingBar();
 return libs;
 }
		
		public ND_com_kony(){
	}
	public String getNameSpace() {
		return "com.kony";
	}

static class RatingBar extends JSLibrary {
 
	String[] methods = { };
 String[] props = { "numStars", "onRatingChange" };
 private static Hashtable<String, Integer> propertyTypeMappings = null;
 public Object createInstance(final Object[] properties, long jsobject) {
 if(propertyTypeMappings == null) {
 propertyTypeMappings = new Hashtable<String, Integer>();
 propertyTypeMappings.put("numStars",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("onRatingChange",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 
 }

 KonyCustomWidget widget = new com.kony.CustomRatingBar();
 widget.initProperties(properties,jsobject,propertyTypeMappings);
 return widget;
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "RatingBar";
	}
	public String[] getProperties() {
		// TODO Auto-generated method stub
		return props;
	}
	/*
	 * return should be status(0 and !0),address
	 */
 
}

};
