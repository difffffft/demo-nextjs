import Link from "next/link";

export default function F1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      F1
      <Link href={'/f1/f2'}>F2</Link>
    </div>
  );
}
