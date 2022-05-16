<script>
	import AddRemove from "./AddRemove.svelte";
	let name;
	let phone;
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
	let niveles_llajua = {
		1: "suave",
		2: "normal",
		3: "picante",
		4: "extra picante",
	};
	const pa_phone = "591791446";
	let wa_message = "";
	$: {
		let text = `😋 Hola soy: ${name}\n📱 ${phone}\n🍽️ Pedido:\n`;
		text += `${lechon} plato${lechon > 1 ? "s":""} de lechon\n`;
		if (pollo > 0) text += `${pollo} porcion${pollo > 1 ? "es":""} de pollo\n`;
		if (ensalada > 0) text += `${ensalada} porcion${ensalada > 1 ? "es":""} de ensalada\n`;
		if (choclo > 0) text += `${choclo} choclo${choclo > 1 ? "s":""}\n`;
		if (bebida > 0) text += `${bebida} vaso${bebida > 1 ? "s":""} de mocochinchi\n`;
		if (llajua_extra > 0) text += `${llajua_extra} porcion${llajua_extra > 1 ? "es":""} extra de llajua ${niveles_llajua[picante]}\n`;
		wa_message = `https://wa.me/${pa_phone}?text=${encodeURIComponent(text)}`;
	}
</script>

<form>
	<h2>Reserva</h2>
	<hr />
	<input bind:value={name} name="name" placeholder="Nombre" type="text" />
	<input bind:value={phone} name="phone" type="phone" placeholder="Tel&eacute;fono" />
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

	<br>
	<i>nivel de picante de la llajua:</i>
	<div class="llajua">
		<label class="picante-1"><input type="radio" bind:group={picante} name="picante" value={1} />{niveles_llajua[1]}</label>
		<label class="picante-2"><input type="radio" bind:group={picante} name="picante" value={2} />{niveles_llajua[2]}</label>
		<label class="picante-3"><input type="radio" bind:group={picante} name="picante" value={3} />{niveles_llajua[3]}</label>
		<label class="picante-4"><input type="radio" bind:group={picante} name="picante" value={4} />{niveles_llajua[4]}</label>
	</div>
	
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
	<a href={wa_message} class="button button-white" target="_blank"> Reservar </a>
</form>
