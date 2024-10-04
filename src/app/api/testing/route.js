import { data } from "./data";

export async function GET() {
    return Response.json(data);
}

export async function POST(req,res) {

    const dataText = await req.text();
    console.log(dataText);
    const newText = {
        id: data.length + 1,
        text: dataText.text
    }
    console.log(newText);

    data.push(newText);


    return Response.json(newText);
}