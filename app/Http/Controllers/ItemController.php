<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    function AddItem(Request $request)
    {
        $this->validate($request, 
        	[
        		'item' => 'required|unique:items,item'
        	],
        	[
        		"required" => "This Item Filed Is Required.",
        		"unique" => "This Item Name is Already In Used."
        ]);
        $item = new Item();
        $item->item = $request->item;
        $item->status = 0;
        $item->save();
        return response()->json($item, 200);
    }
    function EditItem(Request $request)
    {
        $item = Item::find($request->id);
        $item->status = $request->status;
        $item->save();
        return response()->json($item, 200);
    }
    function GetItem(Request $request)
    {
        $item = Item::orderBy("updated_at", "desc")->get();
        return response()->json($item, 200);
    }
}