const response = await fetch("https://firevideo.vercel.app/DB/MOVIES.json")

const names = await response.json()

const reqListener = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(names, null, 3));
}