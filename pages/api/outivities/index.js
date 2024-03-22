import dbConnect from "@/db/connect";
import Outivity from "@/db/models/Outivities";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();

  const session = await getServerSession(request, response, authOptions)

  if (request.method === "GET") {

    if(session){
    const outivity = await Outivity.find({author: session.user.email});
    return response.status(200).json(outivity);
  }
} else if (request.method === "POST") {
    try {
      console.log("session: ", session);
      if (session) {
      const outivityData = request.body;
      const outivity = new Outivity({ ...outivityData, author: session.user.email})
      // await Outivity.create(outivityData);
      await outivity.save();
      response.status(201).json({ status: "Outivity created" });
      } else {
        response.status(401).json({ status: "Access denied"});
      }
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed"});
  }
}
