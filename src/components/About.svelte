<script>
    import FeaturePreview from "./FeaturePreview.svelte";
</script>

<div class="flex flex-col gap-16 pt-24 w-full" id="about">
    <div class="flex flex-col justify-center 3xl:items-center">
        <div class="flex justify-center mb-8">
            <h2 class="text-2xl">Features (test)</h2>
        </div>
        <div class="grid md:grid-cols-2 3xl:grid-cols-3 grid-cols-1 gap-8 3xl:gap-24 3xl:max-w-[1400px] 3xl:place-items-center 3xl:place-content-center 3xl:w-full">
            <FeaturePreview image="/img/logos/kubernetes.svg"
                            title="Kubernetes integration"
                            imageAlt="Kubernetes logo">
                The bot allows for simple and natural integration with the <strong>Kubernetes API</strong>.
                You are able to interact with resources and create bigger deployments in a simple manner of a
                dialogue.
            </FeaturePreview>
            <FeaturePreview title="Firefly III integration"
                            image="/img/logos/firefly-iii.svg"
                            imageAlt="Firefly III Logo">
                One of the features that we wanted to implement was an integration with <a
                    href="https://github.com/firefly-iii/firefly-iii" class="text-link_blue">Firefly
                III</a>. Firefly III is a budgeting software that allows you to track your
                spending's with a simple yet powerful web interface. We made the interface accessible with
                our <strong>NLP chat model</strong>.
            </FeaturePreview>
            <FeaturePreview title="NLP chat model"
                            image="/img/logos/nlp.svg"
                            imageAlt="NLP">
                Our bot is powered by a <i>self-built</i> NLP <i>(Natural Language Processing)</i> chat model. NLP is a
                branch of <i>AI</i> that focuses on giving a computer the ability to understand text or spoken words.
            </FeaturePreview>
        </div>
    </div>
</div>