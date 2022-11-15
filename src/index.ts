const inputs: any = document.querySelectorAll(".controls input");

function handleUpdate(this: any) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input: any) => input.addEventListener("change", handleUpdate));
inputs.forEach((input: any) =>
  input.addEventListener("mousemove", handleUpdate)
);
