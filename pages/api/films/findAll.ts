export default async function filmsFindAll(context = undefined) {
    const res = await fetch("http://localhost:3000/api/films", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const all = await res.json();

    return all;
};