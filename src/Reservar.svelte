<script>
	import AddRemove from "./AddRemove.svelte";
    import dayjs from "dayjs";
	import { onMount } from 'svelte';
	let name;
	let address;
	let phone;
	let input_name;
	let input_address;
	let lechon = 1;
	let papas = 1;
	let ocas = 1;
	let postre = 1;
	let pollo = 0;
	let ensalada = 0;
	let choclo = 0;
	let bebida = 0;
	let llajua_extra = 0;
	let picante =2;
	let validation_msg = "";
	let niveles_llajua = {
		1: "suave",
		2: "normal",
		3: "picante",
		4: "extra picante",
	};
    let presale_limit = "";
    let puede_reservar = true;
	const pa_phone = "59179144641";
	let wa_message = "";
	$: {
		let text = `😋 Hola soy: ${name}\n🍽️ Quisiera hacer este pedido:\n`;
		text += `${lechon} plato${lechon > 1 ? "s":""} de lechon\n`;
		if (pollo > 0) text += `${pollo} porcion${pollo > 1 ? "es":""} de pollo\n`;
		if (ensalada > 0) text += `${ensalada} porcion${ensalada > 1 ? "es":""} de ensalada\n`;
		if (choclo > 0) text += `${choclo} choclo${choclo > 1 ? "s":""}\n`;
		if (bebida > 0) text += `${bebida} vaso${bebida > 1 ? "s":""} de mocochinchi\n`;
		if (llajua_extra > 0) text += `${llajua_extra} porcion${llajua_extra > 1 ? "es":""} extra de llajua ${niveles_llajua[picante]}\n`;
		text += `📍 Enviarlo a: ${address}\n`;
		wa_message = `https://callizaya.com/api.php/lechon/wm?text=${encodeURIComponent(text)}`;
		validation_msg = "";
		if (!address) {
			validation_msg= "Por favor, ingresa tu direccion";
		}
		if (!name) {
			validation_msg= "Por favor, ingresa tu nombre";
		}
	}
	onMount(async () => {
		if (input_name && input_name.value !== name) {
			name = input_name.value;
		}
		if (input_address && input_address.value !== address) {
			address = input_address.value;
		}
	});
	setInterval(() => {
		if (window.presale_limit) {
			presale_limit = window.presale_limit;
			const diff_date = dayjs().diff(presale_limit);
			puede_reservar = diff_date < 0;
		}
	}, 5000);
</script>

<form>
{#if puede_reservar}
	<h2>Reserva</h2>
	<hr />
	<input bind:this={input_name} bind:value={name} name="name" placeholder="Nombre" type="text" required />
	<input bind:this={input_address} bind:value={address} name="address" placeholder="Direccion" type="text" required />
	<table>
		<tr>
			<td>
				<AddRemove bind:value={lechon} max={10} min={1} />
			</td>
			<td> Plato de lech&oacute;n</td>
		</tr>
	</table>
	<h4>Cada plato incluye:</h4>
	<table>
		<tr>
			<td>1 porci&oacute;n Carne</td>
		</tr>
		<tr>
			<td>1 porci&oacute;n de papas</td>
		</tr>
		<tr>
			<td>1 porci&oacute;n de ocas</td>
		</tr>
		<tr>
			<td>1 postre (pl&aacute;tano al horno)</td>
		</tr>
		<tr>
			<td>1 porci&oacute;n de llajua</td>
		</tr>
	</table>

	<h4>Extras:</h4>
	<table>
		<tr>
			<td>
				<AddRemove bind:value={pollo} max={10} />
			</td>
			<td>porci&oacute;n de pollo (10 Bs)</td>
		</tr>
		<tr>
			<td>
				<AddRemove bind:value={bebida} max={10} />
			</td>
			<td>vaso de mocochinchi (3 Bs)</td>
		</tr>
		<tr>
			<td>
				<AddRemove bind:value={choclo} max={10} />
			</td>
			<td>choclo (3 Bs)</td>
		</tr>
		<tr>
			<td>
				<AddRemove bind:value={ensalada} max={20} />
			</td>
			<td>porci&oacute;n de ensalada (2 Bs)</td>
		</tr>
		<tr>
			<td>
				<AddRemove bind:value={llajua_extra} max={20} />
			</td>
			<td>porci&oacute;n extra de llajua (1 Bs)</td>
		</tr>
	</table>
	<!--
	<br>
	<i>nivel de picante de la llajua:</i>
	<div class="llajua">
		<label class="picante-1"><input type="radio" bind:group={picante} name="picante" value={1} />{niveles_llajua[1]}</label>
		<label class="picante-2"><input type="radio" bind:group={picante} name="picante" value={2} />{niveles_llajua[2]}</label>
		<label class="picante-3"><input type="radio" bind:group={picante} name="picante" value={3} />{niveles_llajua[3]}</label>
		<label class="picante-4"><input type="radio" bind:group={picante} name="picante" value={4} />{niveles_llajua[4]}</label>
	</div>
	-->
	<br>
	<h4>
		Costo: {25 * lechon +
			10 * pollo +
			2 * ensalada +
			3 * choclo +
			3 * bebida +
			1 * llajua_extra} Bs.
	</h4>
	<div>Incluye:</div>
	<ul>
		<li>{lechon} plato{lechon > 1 ? "s":""} de lech&oacute;n</li>
		{#if pollo > 0}<li>{pollo} porcion{pollo > 1 ? "es":""} de pollo</li>{/if}
		{#if ensalada > 0}<li>{ensalada} porcion{ensalada > 1 ? "es":""} de ensalada</li>{/if}
		{#if choclo > 0}<li>{choclo} choclo{choclo > 1 ? "s":""}</li>{/if}
		{#if bebida > 0}<li>{bebida} vaso{bebida > 1 ? "s":""} de mocochinchi</li>{/if}
		{#if llajua_extra > 0}<li>{llajua_extra} porcion{llajua_extra > 1 ? "es":""} extra de llajua {niveles_llajua[picante]}</li>{/if}
	</ul>
	<br />
	{#if validation_msg}
		<a class="button button-white" target="_blank" rel="nofollow"> Reservar </a>
	{:else}
		<a href={wa_message} class="button button-white" target="_blank" rel="nofollow"> Reservar </a>
	{/if}
	<small class="error">{validation_msg}</small>
{:else}
	El periodo de reserva ha terminado.<br>
	Puedes reservar la siguiente semana.<br>
	Gracias por su comprensi&oacute;n. 😇
{/if}
</form>
65153357