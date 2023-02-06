export default async function artistsFindAll(context = undefined) {
    const res = await fetch("http://localhost:3000/api/artists", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const all = await res.json();

    return all;
};