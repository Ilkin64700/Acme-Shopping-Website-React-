import * as React from "react"

const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="cartIconTitle"
    stroke="#eb5757"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#eb5757"
  >
    <title>{"Cart"}</title>
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx={9} cy={19} r={1} />
    <circle cx={18} cy={19} r={1} />
    <path d="M6 6H3" />
  </svg>
)

export default SvgComponent
