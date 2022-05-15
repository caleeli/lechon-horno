<script>
    import dayjs from "dayjs";
    let presale_limit = "";
    let next_friday = "";
    const env = process.env;
    console.log(`${env.API_BASE}/next_date`);
    fetch(
        `${env.API_BASE}/next_date`
    )
        .then((res) => res.json())
        .then((data) => {
            presale_limit = data.presale_limit;
            next_friday = data.next_friday;
        });
</script>

<div>
    entrega: <b>{dayjs(next_friday).format('dddd DD-MMMM')}</b><br>
    reserva hasta: <b>{dayjs(presale_limit).format('dddd DD-MMMM')}</b>
</div>

<div>
    <a class="button" href="#reservar">RESERVA YA!</a>
    <div>
        quedan {dayjs(presale_limit).fromNow(true)}
    </div>
</div>

<style>
</style>
