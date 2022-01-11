import { Form, useSearchParams } from "remix";

export default function Marquee() {
  const [searchParams] = useSearchParams();
  const scrollAmount = searchParams.get("scrollAmount") ?? 6;
  return (
    <>
      <marquee scrollAmount={scrollAmount}>
        <h1>hello</h1>
      </marquee>
      <Form>
        <label>
          Scroll amount{" "}
          <input
            type="number"
            name="scrollAmount"
            defaultValue={scrollAmount}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </Form>
    </>
  );
}
