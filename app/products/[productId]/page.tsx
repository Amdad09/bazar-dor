import { units } from "@/components/products/ProductCard";
import Container from "@/components/ui/Container";
import { getProduct } from "@/lib/api/product";
import { banglaNumber } from "@/utils/bnNumber";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
export const instant = false;
interface ProductDetailsProps{
    params: Promise<{productId: string}>
}
const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const { productId } = await params;
  const product = await getProduct(productId);
  const { image, nameBn, categoryNameBn, unit, today, yesterday, change, markets, category} = product;
  const { dir, pct } = change;

  const maximum = Math.max(...markets.map(market => market.max));
  const minimum = Math.min(...markets.map(market => market.min));

      let style = '';
  let icon = null;
  let todayPrice = '';
      if (dir === 'up') {
          style = 'text-red-600 bg-red-500/10';
        icon = <FaCaretUp />;
        todayPrice = 'বেড়েছে';
      } else if (dir === 'down') {
          style = 'text-green-500 bg-green-500/10';
        icon = <FaCaretDown />;
        todayPrice = 'কমেছে';
      } else {
          style = 'text-neutral-800 bg-neutral-700/10';
        icon = <FiMinus />;
        todayPrice = 'সমান আছে';
      }
    console.log(product);
  return (
      <div className="bg-neutral-100">
          <Container className="space-y-6 py-6">
              {/* Breadcrumb */}
              <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-sm"
              >
                  <Link
                      className="transition-all duration-300 hover:text-green-600 hover:scale-105"
                      href="/"
                  >
                      হোম
                  </Link>
                  <span aria-hidden>›</span>
                  <Link
                      className="transition-all duration-300 hover:text-green-600 hover:scale-105"
                      href={`/categories/${category}`}
                  >
                      {categoryNameBn}
                  </Link>
                  <span aria-hidden>›</span>
                  <span>{nameBn}</span>
              </nav>

              {/* Header card */}
              <section className="flex flex-col gap-4 rounded-3xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-base-200">
                          {/* <Image src="/rice.png" alt="" width={40} height={40} /> */}
                          <span className="text-3xl">{image}</span>
                      </div>
                      <div>
                          <h1 className="text-3xl font-bold">{nameBn}</h1>
                          <p className="text-base-content/60">
                              প্রতি {units[unit]} · {categoryNameBn}
                          </p>
                          <p className="mt-2">
                              গতকালের তুলনায় আজ দাম{' '}
                              <strong>{todayPrice}</strong> ·
                              {banglaNumber(Math.abs(today - yesterday))} টাকা
                          </p>
                      </div>
                  </div>

                  <div className="rounded-2xl bg-base-200 px-8 py-5 text-center">
                      <p className="text-sm text-base-content/60">আজকের দাম</p>
                      <p className="text-4xl font-bold">
                          {banglaNumber(today)}
                      </p>
                      <p className="text-sm text-base-content/60">
                          টাকা / {units[unit]}
                      </p>
                      <p
                          className={`mt-2 text-sm font-semibold ${style} inline-flex items-center bg-base-200`}
                      >
                          <span className="mr-1 text-xl">{icon}</span>{' '}
                          {banglaNumber(pct)}%
                      </p>
                  </div>
              </section>

              {/* Summary */}
              <section className="space-y-4 rounded-3xl border border-base-300 bg-base-100 p-6">
                  <h2 className="text-lg font-semibold">দামের সারসংক্ষেপ</h2>

                  <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl border border-base-300 p-5">
                          <p className="text-sm text-base-content/60">
                              সর্বনিম্ন দাম
                          </p>
                          <p className="my-1 text-2xl font-bold text-green-600">
                              {banglaNumber(minimum)}
                              <span className="text-base font-medium ml-1">
                                  টাকা
                              </span>
                          </p>
                          <p className="text-xs text-base-content/60">
                              সবচেয়ে কম দামের বাজার
                          </p>
                      </div>

                      <div className="rounded-2xl border border-base-300 p-5">
                          <p className="text-sm text-base-content/60">
                              সর্বাধিক দাম
                          </p>
                          <p className="my-1 text-2xl font-bold text-red-600">
                              {banglaNumber(maximum)}
                              <span className="text-base font-medium ml-1">
                                  টাকা
                              </span>
                          </p>
                          <p className="text-xs text-base-content/60">
                              সবচেয়ে বেশি দামের বাজার
                          </p>
                      </div>

                      <div className="rounded-2xl border border-base-300 p-5">
                          <p className="text-sm text-base-content/60">
                              গড় দাম
                          </p>
                          <p className="my-1 text-2xl font-bold text-yellow-500">
                              {banglaNumber(
                                  Number(((maximum + minimum) / 2).toFixed(2)),
                              )}
                              <span className="text-base font-medium ml-1">
                                  টাকা
                              </span>
                          </p>
                          <p className="text-xs text-base-content/60">
                              প্রতি কেজি-এর হিসাবে
                          </p>
                      </div>
                  </div>

                  {/* Market table */}
                  <h2 className="pt-4 text-lg font-semibold">
                      বাজারভিত্তিক আজকের দাম
                  </h2>

                  <div className="overflow-x-auto rounded-2xl border border-base-300">
                      <table className="w-full min-w-150 text-left text-sm">
                          <thead className="text-base-content/60">
                              <tr className="border-b border-base-300">
                                  <th className="px-5 py-4 font-bold">বাজার</th>
                                  <th className="px-5 py-4 font-bold">বিভাগ</th>
                                  <th className="px-5 py-4 text-right font-bold">
                                      সর্বনিম্ন
                                  </th>
                                  <th className="px-5 py-4 text-right font-bold">
                                      সর্বাধিক
                                  </th>
                                  <th className="px-5 py-4 text-right font-bold">
                                      গড়
                                  </th>
                              </tr>
                          </thead>

                          <tbody>
                              {markets.map((m) => (
                                  <tr
                                      key={m.market}
                                      className="border-b border-base-400 last:border-0 odd:bg-base-100 even:bg-neutral-200 hover:bg-base-300"
                                  >
                                      <td className="px-5 py-4 font-semibold text-neutral-600">
                                          {m.market}
                                      </td>
                                      <td className="px-5 py-4">
                                          {m.division}
                                      </td>
                                      <td className="px-5 py-4 text-right">
                                          {banglaNumber(m.min)} টাকা
                                      </td>
                                      <td className="px-5 py-4 text-right">
                                          {banglaNumber(m.max)} টাকা
                                      </td>
                                      <td className="px-5 py-4 text-right font-bold">
                                          {banglaNumber(
                                              Number(
                                                  ((m.max + m.min) / 2).toFixed(
                                                      2,
                                                  ),
                                              ),
                                          )}
                                          <span className="ml-2">টাকা</span>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </section>
          </Container>
      </div>
  );
};

export default ProductDetails;