<script>
    import dayjs from "dayjs";
    let presale_limit = "";
    let next_friday = "";
    let diff_date = 0;
    const env = process.env;
    window.presale_limit = "";
    fetch(
        `${env.API_BASE}/next_date`
    )
        .then((res) => res.json())
        .then((data) => {
            presale_limit = data.presale_limit;
            next_friday = data.next_friday;
            diff_date = dayjs().diff(presale_limit);
            window.presale_limit = presale_limit;
        });
    
</script>

{#if diff_date < 0}
<div>
    <img src="images/abierto.svg" alt="logo" class="logo" />
</div>

<div>
    entrega: <b>{!next_friday ? "..." : dayjs(next_friday).format('dddd DD-MMMM')}</b><br>
    reserva hasta: <b>{!presale_limit ? "..." : dayjs(presale_limit).format('dddd DD-MMMM')}</b>
</div>

<div>
    <a class="button" href="#reservar">RESERVA YA!</a>
    <div>
        quedan {!presale_limit ? "..." : dayjs(presale_limit).fromNow(true)}
    </div>
</div>
{:else}
<div>
    <img src="images/cerrado.svg" alt="logo" class="logo" />
</div>

<div>
    entrega: <b>{!next_friday ? "..." : dayjs(next_friday).format('dddd DD-MMMM')}</b><br>
</div>

<div>
    <a class="button disabled" href="#mas-info">
        Ver m&aacute;s
    </a>
</div>
{/if}

<a href="#mas-info">mas informaci&oacute;n</a>
<style>
</style>
