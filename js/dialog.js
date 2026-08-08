const dialog = document.getElementById("modal");
const title = document.getElementById("modal-title");
const content = document.getElementById("modal-content");

const modalData = {
    "programming":
    `
    I'm usually working on <span class="hl">C#</span>, <span class="hl">lua</span>, and <span class="hl">html/css</span>.<br>
    I'm also interested in <span class="hl">Python</span>, and <span class="hl">C++</span>.<br>

    <h4>My favorite projects:</h4>
    <ul>
    <li><a class="hl hv-ul" href="https://github.com/T-b-t-nchos/Aquavium.nvim">🪼Aquavium.nvim</a> - Aquarium color scheme, designed for transparent terminal. </li>
    <li><a class="hl hv-ul" href="https://github.com/T-b-t-nchos/FMP7.nvim">🎺FMP7.nvim</a> - A Neovim plugin to control FMP7 (FM Music Drv.).</li>
    <li><a class="hl hv-ul" href="https://github.com/T-b-t-nchos/ss-rubi.nvim">🖊️ss-rubi.nvim</a> - A Neovim plugin to insert ruby-notation in your file.</li>
    <li><a class="hl hv-ul" href="https://github.com/T-b-t-nchos/nothing.nvim">❓️nothing.nvim</a> - Just one color. Nothing else. (Joke.) </li>
    <li><a class="hl hv-ul" href="https://github.com/T-b-t-nchos/sshhub">🖥️sshhub</a> - A CLI tool to easily multiple SSH connections.</li>
    <li><a class="hl hv-ul" href="https://github.com/T-b-t-nchos/mm2f">📦️mm2f</a> - [M]ultiple package [M]anager packages [To] a [F]ile .</li>
    <li><a class="hl hv-ul" href=""></a></li>
    </ul>
    <br>
    <ul>
    <li>🤔and many more...?</li>
    </ul>
    `,
    "server":
    `
    <h4>I'm currently hosting:</h4>
    <ul>
    <li class="hl">📂 local-NAS</li>
    <li class="hl">🤖 Discord bot</li>
    <li class="hl">⚙  GitHub Actions self-hosted runner</li>
    <li class="hl">🧩 MC Server</li>
    <li><a class="hl hv-ul" href=""></a></li>
    </ul>
    <br>
    <ul>
    <li>and so on...</li>
    </ul>
    `,
    "video":
    `
    I'm currently <span class="hl">learning</span> and <span class="hl">using</span> <span class="hl">"Yukkuri Movie Maker 4"</span>.<br>
    <br>
    <h4>My works:</h4>
    <ul>
    <li><a class="hl hv-ul" href="https://youtu.be/301fBL1R4Mo?si=-0Sf56NvneXnccx0">湘南藤沢高専 Discordキャンパス「第1回LTイベント　PR動画」</a></li>
    <li><a class="hl hv-ul" href=""></a></li>
    </ul>
    `,
    "design":
    `
    I'm currently <span class="hl">learning</span> and creating design work.<br>
    <br>
    <h4>My works:</h4>
    <ul>
    <li><a class="hl hv-ul" href="https://nandemo.tanahiro2010.com/">OGP of 「なんでも単語帳」</a></li>
    <li><a class="hl hv-ul" href=""></a></li>
    </ul>
    <br>
    <ul>
    <li><a class="hl hv-ul" href="/">And this website✨️</a></li>
    </ul>
    `,
    "retro-and-game":
    `
    I love <span class="hl">PC98</span> series and <span class="hl">FM music</span>.<br>
    <br>
    <br>
    I love <a class="hl hv-ul" href="https://daidai7742.wixsite.com/aqua-dance">🐟️ アクアリウムは踊らない / The Aquarium does not dance</a>.<br>
    <br>
    And also, I love:
    <ul>
    <li><a class="hl hv-ul" href="https://www16.big.or.jp/~zun/">☯  Touhou Project</a></li>
    <li><a class="hl hv-ul" href="https://www.minecraft.net/">🧩 Minecraft</a></li>
    <li><a class="hl hv-ul" href="https://cookieclicker.com/">🍪 Cookie Clicker</a></li>
    </ul>
    `,
};

document.querySelectorAll(".open-dialog").forEach(el => {
    el.addEventListener("click", () => {
        const key = el.id;

        title.textContent = el.textContent;
        const emojiRegex = /\p{Extended_Pictographic}/gu;

        content.innerHTML = (modalData[key] || "Nothing to show... sorry.")
            .replace(emojiRegex, match =>
                `<span class="noto-emoji">${match}</span>`
            );

        dialog.showModal();
    });
});

