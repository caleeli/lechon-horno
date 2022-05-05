<script>
	export let name;
</script>

<main>
	<div class="logo-container">
		<img src="images/abierto.svg" alt="logo" class="logo">
		<button>Reserve ahora</button>
	</div>
	<picture>
		<img src="images/panel1.jpg" alt="fondo" class="fondo">
	</picture>
</main>

<style>
	.logo-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 200px);
		gap: 4rem;
	}
	.fondo {
		width: 100%;
	}
</style>