<script lang="ts">
    export let title: string = "A feature";
    export let image: string = "/img/logos/kubernetes.svg"
    export let imageAlt: string = "Kubernetes logo"
    export let description: string = "This is a new feature description."
</script>

<div class="flex flex-col gap-4 items-center text-center">
    <div class="flex items-center">
        <img src={image} alt={imageAlt} class="w-24 h-24">
    </div>
    <div class="flex flex-col gap-2">
        <h2 class="text-xl">{title}</h2>
        <p>
            <slot/>
        </p>
    </div>
</div>