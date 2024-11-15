shinsouhitoshi1203
<h1>ui-library-example</h1>

.../js

    |> component
    |>         app.js <-- main
    |>
    |> core
    |>         core.js  <-- render HTML + generate a store
    |>         reducer.js <-- interact with store + get data from somewhere else
    |>         storeDelivery.js <-- return methods from core.js
    |>
    |> script.js <-- call attach()

