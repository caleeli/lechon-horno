<script>
	export let value = 0;
	export let max = 3;
	export let min = 0;
	export let disabled = false;
	function reduce() {
		if (!disabled) {
			value = Math.min(Math.max(value - 1, min), max);
		}
	}
	function increase() {
		if (!disabled) {
			value = Math.min(Math.max(value + 1, min), max);
		}
	}
	function rotate() {
		if (!disabled) {
			value = Math.max(value + 1, min);
			if (value > max) {
				value = min;
			}
		}
	}
</script>

<div class="plus-minus-control">
	<span
		class={`plus-minus ${disabled || value >= max ? "disabled" : ""}`}
		on:click={increase}>+</span
	>
	<input
		bind:value
		placeholder="0"
		type="number"
		on:input
		readonly={true}
		on:click={rotate}
	/>
	<span
		class={`plus-minus ${disabled || value <= min ? "disabled" : ""}`}
		on:click={reduce}>-</span
	>
</div>
