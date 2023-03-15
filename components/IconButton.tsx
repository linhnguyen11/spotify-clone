interface Props {
    icon : React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
    }>,
    label : String
}

function IconButton({icon: Icon, label}: Props) {
  return (
      <button className="flex items-center space-x-2 hover:text-white">
      <Icon className="icon text-gray-500" />
      <span>{label}</span>
    </button>
  )
}

export default IconButton