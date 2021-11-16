<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="./assets/images/favicon.png" />
  <link rel="stylesheet" href="style.css">
  <title>Accent Design Front End Technical Test</title>
</head>
<body>
  <div class="flex-container">
    
    <!-- Dave Fuller's Card -->
    <section class="card">
      <div class="dave-comic background">
        <img src="./assets/images/dave-avatar.png" alt="Dave Fuller's Avatar">
        <div class="box-shadow">
          <h1 class="dave-green title-name"><span></span></h1>
        </div>
      </div>
      <div class="card-info grid-container box-shadow">
        <p class="daves-card attribute grid-1"><span></span></p>
        <p class="daves-card attribute grid-2"><span></span></p>
        <p class="daves-card attribute grid-3"><span></span></p>
        <p class="daves-card attribute grid-4"><span></span></p>
        <p class="daves-card attribute grid-5"><span></span></p>
        <p class="daves-card value grid-6"><span>44Y 1M 17D</span></p>
        <p class="daves-card value grid-7"><span></span></p>
        <p class="daves-card value grid-8"><span></span></p>
        <p class="daves-card value grid-9"><span></span></p>
        <p class="daves-card value grid-10"><span></span></p>
      </div>
      <p class="daves-card description"><span></span></p>
    </section>

    <!-- Nick Thompson's Card -->
    <section class="card">
      <div class="nick-comic background">
        <img class="adjust-nick-left" src="./assets/images/nick-avatar.png" alt="Nick Thompson's Avatar">
        <div class="box-shadow">
          <h1 class="nick-red title-name"><span></span></h1>
        </div>
      </div>
      <div class="card-info grid-container box-shadow">
        <p class="nicks-card attribute grid-1"><span></span></p>
        <p class="nicks-card attribute grid-2"><span></span></p>
        <p class="nicks-card attribute grid-3"><span></span></p>
        <p class="nicks-card attribute grid-4"><span></span></p>
        <p class="nicks-card attribute grid-5"><span></span></p>
        <p class="nicks-card value grid-6"><span>XXY XXM XXD</span></p>
        <p class="nicks-card value grid-7"><span></span></p>
        <p class="nicks-card value grid-8"><span></span></p>
        <p class="nicks-card value grid-9"><span></span></p>
        <p class="nicks-card value grid-10"><span></span></p>
      </div>
      <div class="nicks-card description"><span></span></div>
    </section>

    <!-- Craig Vincent's Card -->
    <section class="card">
      <div class="craig-comic background">
        <img src="./assets/images/craig-avatar.png" alt="Craig Vincent's Avatar">
        <div class="box-shadow">
          <h1 class="craig-orange title-name"><span></span></h1>
        </div>
      </div>
      <div class="card-info grid-container box-shadow">
        <p class="craigs-card attribute grid-1"><span></span></p>
        <p class="craigs-card attribute grid-2"><span></span></p>
        <p class="craigs-card attribute grid-3"><span></span></p>
        <p class="craigs-card attribute grid-4"><span></span></p>
        <p class="craigs-card attribute grid-5"><span></span></p>
        <p class="craigs-card value grid-6"><span>XXY XM XD</span></p>
        <p class="craigs-card value grid-7"><span></span></p>
        <p class="craigs-card value grid-8"><span></span></p>
        <p class="craigs-card value grid-9"><span></span></p>
        <p class="craigs-card value grid-10"><span></span></p>
      </div>
      <div class="craigs-card description"><span></span></div>
    </section>

    <!-- Geoff Somner's Card -->
    <section class="card">
      <div class="geoff-comic background">
        <img src="./assets/images/geoff-avatar.png" alt="Geoff Somner's Avatar">
        <div class="box-shadow">
          <h1 class="geoff-pink title-name"><span></span></h1>
        </div>
      </div>
      <div class="card-info grid-container box-shadow">
        <p class="geoffs-card attribute grid-1"><span></span></p>
        <p class="geoffs-card attribute grid-2"><span></span></p>
        <p class="geoffs-card attribute grid-3"><span></span></p>
        <p class="geoffs-card attribute grid-4"><span></span></p>
        <p class="geoffs-card attribute grid-5"><span></span></p>
        <p class="geoffs-card value grid-6"><span>XXY XM XD</span></p>
        <p class="geoffs-card value grid-7"><span></span></p>
        <p class="geoffs-card value grid-8"><span></span></p>
        <p class="geoffs-card value grid-9"><span></span></p>
        <p class="geoffs-card value grid-10"><span></span></p>
      </div>
      <div class="geoffs-card description"><span></span></div>
    </section>

    <!-- Brenton Taylor's Card -->
    <section class="card">
      <div class="brenton-comic background">
        <img src="./assets/images/brenton-avatar.png" alt="Brenton Taylor's Avatar">
        <div class="box-shadow">
          <h1 class="brenton-green title-name"><span></span></h1>
        </div>
      </div>
      <div class="card-info grid-container box-shadow">
        <p class="brentons-card attribute grid-1"><span></span></p>
        <p class="brentons-card attribute grid-2"><span></span></p>
        <p class="brentons-card attribute grid-3"><span></span></p>
        <p class="brentons-card attribute grid-4"><span></span></p>
        <p class="brentons-card attribute grid-5"><span></span></p>
        <p class="brentons-card value grid-6"><span>XXY XM XD</span></p>
        <p class="brentons-card value grid-7"><span></span></p>
        <p class="brentons-card value grid-8"><span></span></p>
        <p class="brentons-card value grid-9"><span></span></p>
        <p class="brentons-card value grid-10"><span></span></p>
      </div>
      <div class="brentons-card description"><span></span></div>
    </section>
    
    <footer><a href="https://hanif.tech/" target="_blank" rel="noopener noreferrer">Hanif.tech</a></footer>
  </div>

  <script>
    // Use PHP to process the supplied serialised data into a JSON format that can be consumed by JavaScript.
    const data = <?php echo json_encode( unserialize(file_get_contents("./assets/front-end_data.txt")) ); ?>;
  </script>

  <script src="./assets/js-libraries/moment.min.js"></script>
  <script src="script.js"></script>
</body>
</html>