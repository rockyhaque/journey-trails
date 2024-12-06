import connectDB from "@/lib/connectDB";
import AllPlaces from "@/models/AllPlaces";

//? GET ALL PLACES
export async function GET(req) {
  try {
    await connectDB();
    const places = await AllPlaces.find();
    return new Response(JSON.stringify({ success: true, places: places }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in GET /api/all-places:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error", error }),
      { status: 500 }
    );
  }
}

// ? POST NEW PLACES
export async function POST(req, res) {
  try {
    await connectDB();
    const body = await req.json();
    const newPlace = new AllPlaces(body);
    const savedPlace = await newPlace.save();
    return new Response(JSON.stringify(savedPlace), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in POST /api/all-places:", error);
    if (error.name === "ValidationError") {
      const validationErrors = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return new Response(
        JSON.stringify({
          message: "Validation error",
          validationErrors: validationErrors,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: "An error occurred while creating the place.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
