<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodData Test</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <h1>Food Data</h1>
        <h3>Pulling data from the USDA</h3>
        <form id="food-search-form">
            <label style="display: block; padding-bottom: 10px;" for="search">Find a food:</label>
            <input id="search-bar" style="width: 100%; margin-bottom: 10px; padding: 5px;" id="search" name="search" type="search" placeholder="Search...">
            <button type="submit">Submit</button>
        </form>
        <div id="search-results-wrapper"><pre id="search-results"></pre></div>
    </div>
    <script src="./script.js"></script>
</body>
</html>