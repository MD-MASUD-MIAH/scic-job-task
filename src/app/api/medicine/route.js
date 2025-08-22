import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET() { 

  const data = await dbConnect(collectionNameObj.medicinesCollection).find({}).sort({_id:-1}).toArray() 
  return Response.json({data})
  
}


export const POST = async (req) => {
  try {
    const body = await req.json(); 
    
    const medicineCollection = dbConnect(collectionNameObj.medicinesCollection) 

    const result = await medicineCollection.insertOne(body)

   
    return NextResponse.json(
      { message: "Medicine added successfully",result},
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};


