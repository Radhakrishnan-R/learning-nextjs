import { data } from "../data";
import { NextRequest } from "next/server";

export async function PATCH(req, {params}) {
    console.log(params);

    return new Response("done");
}