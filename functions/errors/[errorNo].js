export async function onRequest(context) {
    const { request, env, params } = context;

    const errorNo = String(params.errorNo ?? "");

    /*
     * Only accept three-digit HTTP status codes.
     */
    if (!/^\d{3}$/.test(errorNo)) {
        return new Response("Bad Request", {
            status: 400,
            headers: {
                "Content-Type": "text/plain; charset=UTF-8"
            }
        });
    }

    const status = Number(errorNo);

    /*
     * Only allow HTTP error status codes.
     */
    if (status < 400 || status > 599) {
        return new Response("Bad Request", {
            status: 400,
            headers: {
                "Content-Type": "text/plain; charset=UTF-8"
            }
        });
    }

    /*
     * 418 is a special page and should not use the generic template.
     */
    if (status === 418) {
        const specialUrl = new URL("/errors/418.html", request.url);
        const specialResponse = await env.ASSETS.fetch(
            new Request(specialUrl)
        );

        if (!specialResponse.ok) {
            return new Response("Internal Server Error", {
                status: 500,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            });
        }

        return new Response(specialResponse.body, {
            status: 418,
            headers: {
                "Content-Type": "text/html; charset=UTF-8",
                "Cache-Control": "public, max-age=300"
            }
        });
    }

    /*
     * Load the generic error page template.
     */
    const templateUrl = new URL(
        "/errors/template.html",
        request.url
    );

    const templateResponse = await env.ASSETS.fetch(
        new Request(templateUrl)
    );

    if (!templateResponse.ok) {
        return new Response("Internal Server Error", {
            status: 500,
            headers: {
                "Content-Type": "text/plain; charset=UTF-8"
            }
        });
    }

    let html = await templateResponse.text();

    /*
     * Split the error code for the visual layout.
     *
     * 403 -> 4 / 03
     * 404 -> 4 / 04
     * 500 -> 5 / 00
     */
    const errorFirst = errorNo.slice(0, 1);
    const errorRest = errorNo.slice(1);

    html = html
        .replaceAll("{{ERROR_CODE}}", errorNo)
        .replaceAll("{{ERROR_FIRST}}", errorFirst)
        .replaceAll("{{ERROR_REST}}", errorRest);

    return new Response(html, {
        status,
        headers: {
            "Content-Type": "text/html; charset=UTF-8",
            "Cache-Control": "public, max-age=300"
        }
    });
}
