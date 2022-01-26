export function fileUpload(selector, options = {}) {
  let files = [];

  const onUpload = options.onUpload ?? noop;

  const input = document.querySelector(selector);
  input.hidden = true;

  if (options.multi) {
    input.setAttribute("multiple", true);
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute("accept", options.accept.join(","));
  }

  const previews = element("div", ["fu-previews"]);
  const openButton = element("button", ["fu-btn"], "Открыть");
  const uploadButton = element(
    "button",
    ["fu-btn", "fu-btn--primary"],
    "Загрузить"
  );
  uploadButton.hidden = true;

  input.insertAdjacentElement("afterend", previews);
  input.insertAdjacentElement("afterend", uploadButton);
  input.insertAdjacentElement("afterend", openButton);

  const triggerInput = () => input.click();

  const changeHandler = (event) => {
    if (!event.target.files.length) return;

    files = Array.from(event.target.files);
    previews.innerHTML = "";
    uploadButton.hidden = false;

    files.forEach((file) => {
      if (!file.type.match("image")) return;
      const reader = new FileReader();

      reader.onload = (ev) => {
        const src = ev.target.result;

        previews.insertAdjacentHTML(
          "afterbegin",
          `
          <article class="fu-preview">
            <button class="fu-preview__remove" data-name="${
              file.name
            }">&times;</button>
            <img class="fu-preview__img" src="${src}" alt="${file.name}" />
            <div class="fu-preview__info">
              <span class="fu-preview__name">${file.name}</span>
              <span class="fu-preview__size">${bytesToSize(file.size)}</span>
            </div>
          </article>
        `
        );
      };

      reader.readAsDataURL(file);
    });
  };

  const removeHandler = (event) => {
    if (!event.target.dataset.name) return;

    const { name } = event.target.dataset;
    files = files.filter((file) => file.name !== name);

    if (!files.length) {
      uploadButton.hidden = true;
    }

    const block = previews
      .querySelector(`[data-name="${name}"]`)
      .closest(".fu-preview");

    block.classList.add("fu-preview--removing");

    const removing = () => {
      block.remove();
      block.removeEventListener("transitionend", removing);
    };

    block.addEventListener("transitionend", removing);
  };

  const clearPreviewInfo = (el) => {
    el.style.transform = "translateY(0)";
    el.innerHTML = `<div class="fu-preview__progress"></div>`;
  };

  const uploadHandler = () => {
    previews
      .querySelectorAll(".fu-preview__remove")
      .forEach((el) => el.remove());

    const previewInfo = previews.querySelectorAll(".fu-preview__info");
    previewInfo.forEach(clearPreviewInfo);

    onUpload(files);
  };

  openButton.addEventListener("click", triggerInput);
  input.addEventListener("change", changeHandler);
  previews.addEventListener("click", removeHandler);
  uploadButton.addEventListener("click", uploadHandler);
}

// ########################################################

function noop() {}

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (!bytes) return "0 Byte";

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

  return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
}

function element(tag, classes = [], content) {
  const node = document.createElement(tag);

  if (classes.length) {
    node.classList.add(...classes);
  }

  if (content) {
    node.textContent = content;
  }

  return node;
}
