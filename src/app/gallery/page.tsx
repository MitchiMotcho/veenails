export default function Gallery() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Gallery
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    - Featured Section <br/>
                    - Retention Section <br />
                    - Doupi Section
                </p>
            </section>
        </main>
    );
}
