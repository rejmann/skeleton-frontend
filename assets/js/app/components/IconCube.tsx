interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
  title?: string
}

export default function IconCube({
  size = 32,
  title = 'Cube',
  className = '',
  ...props
}: IconProps) {
  const s = typeof size === 'number' ? `${size}px` : size

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={s}
      height={s}
      className={className}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 7 12 4.5 19.5 7 12 9.5zM2 17l10 5 10-5v-2l-10 5-10-5v2z"
      />
    </svg>
  )
}
