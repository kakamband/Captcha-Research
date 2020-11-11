<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database</title>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    <style>
        body,
        html {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: rgb(242, 244, 248);
            display: flex;
        }

        .card {
            box-shadow: 1px 1px 20px #ddd9d9;
            background: #FFFFFF;
            border: none;
            margin: auto;
            min-height: 200px;
            width: 400px;
            border-radius: 5px;
            display: block;
            text-align: center;
            clear: both;
        }

        .card .card-heading {
            padding-top: 10px;
            height: 35px;
            background: #FFFFFF;
            border-bottom: 0;
            font-size: 25px;
            font-family: Arial, san-serif;
            font-weight: bold;
            color: #7b7b7b;
            text-align: left;
            padding-left: 20px;
        }

        .card .card-description {
            margin-top: 30px;
            color: gray;
            font-size: 15px;
            font-family: Arial, san-serif;
        }

        hr {
            border: none;
            border-bottom: 1px solid silver;
        }
    </style>
</head>

<body>
    <!-- <div style="width: wh;margin-top: 20px;margin-bottom: 20px;">
        <div class="card">
            <div class="card-heading">
                Success
            </div>
            <hr>
            <div class="card-description">
                You have successfully solved the captcha!<br> Your result has been saved to the database
                <br>
                <br>
                <script>
                    document.write(`Captcha Type: ${getParameterByName('captcha_type')} <br>Solving Time: ${getParameterByName('solving_time')} Millisecond(s) <br> Response Time: ${getParameterByName('response_time')} Millisecond(s) `)
                </script>
            </div>
        </div>
    </div> -->
    <div style="width: 100%; margin:20px">
        <table id="table" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Captcha Name</th>
                    <th>Solving Time</th>
                    <th>Response Time</th>
                    <th>Status</th>
                </tr>
            </thead>
        </table>
    </div>
    <script type="text/javascript" src='jquery.js'></script>
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#table').DataTable({
                "processing": true,
                "serverSide": true,
                "ajax": "scripts/server_processing.php"
            });
        });
    </script>
</body>

</html>