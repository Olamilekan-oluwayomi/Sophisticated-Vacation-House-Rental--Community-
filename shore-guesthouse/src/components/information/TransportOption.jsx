function TransportOption({
  label,
  title,
  description,
  price,
  note,
}) {
  return (
    <article className="grid gap-8 py-10 md:grid-cols-[180px_1fr]">
      <p className="font-serif text-stone-500">
        {label}
      </p>

      <div>
        <h3 className="mb-4 font-serif text-3xl text-stone-900">
          {title}
        </h3>

        <p className="mb-6 max-w-2xl leading-8 text-stone-700">
          {description}
        </p>

        <p className="font-medium text-stone-900">
          {price}
        </p>

        <p className="mt-2 text-sm text-stone-500">
          {note}
        </p>
      </div>
    </article>
  );
}

export default TransportOption;