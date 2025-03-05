document.addEventListener("DOMContentLoaded", function () {
    const ticketInput = document.getElementById("ticketNumber");
    const openTicketBtn = document.getElementById("openTicket");
    const jiraUrlInput = document.getElementById("jiraUrl");
    const boardPrefixInput = document.getElementById("boardPrefix");
    const saveConfigBtn = document.getElementById("saveConfig");
    const resetConfigBtn = document.getElementById("resetConfig");
    const configSection = document.getElementById("configSection");
    const resetConfigSection = document.getElementById("resetConfigSection");
    const ticketSection = document.getElementById("ticketSection");

    chrome.storage.local.get(["jiraBoardUrl", "boardPrefix"], function (data) {
        if (!data.jiraBoardUrl || !data.boardPrefix) {
            jiraUrlInput.value = "";
            boardPrefixInput.value = "";
            resetConfigSection.style.display = "none";
            ticketSection.style.display = "none";
        } else {
            jiraUrlInput.value = data.jiraBoardUrl;
            boardPrefixInput.value = data.boardPrefix;
            configSection.style.display = "none";
        }
    });

    saveConfigBtn.addEventListener("click", function () {
        const jiraUrl = jiraUrlInput.value.trim();
        const boardPrefix = boardPrefixInput.value.trim();
        if (jiraUrl && boardPrefix) {
            chrome.storage.local.set({ jiraBoardUrl: jiraUrl, boardPrefix: boardPrefix }, function () {
                configSection.style.display = "none";
                ticketSection.style.display = "block";
                resetConfigSection.style.display = "block";
            });
        }
    });

    resetConfigBtn.addEventListener("click", function () {
        chrome.storage.local.remove(["jiraBoardUrl", "boardPrefix"], function () {
            jiraUrlInput.value = "";
            boardPrefixInput.value = "";
            configSection.style.display = "block";
            ticketSection.style.display = "none";
            resetConfigSection.style.display = "none";
        });
    });

    function openJiraTicket() {
        chrome.storage.local.get(["jiraBoardUrl", "boardPrefix"], function (data) {
            if (data.jiraBoardUrl && data.boardPrefix) {
                const ticketNumber = ticketInput.value.trim();
                if (ticketNumber) {
                    const jiraUrl = `${data.jiraBoardUrl}/browse/${data.boardPrefix}-${ticketNumber}`;
                    chrome.tabs.create({ url: jiraUrl });
                }
            } else {
                alert("Please configure your Jira board URL and prefix first.");
            }
        });
    }

    openTicketBtn.addEventListener("click", openJiraTicket);
    ticketInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            openJiraTicket();
        }
    });
});