import { parseISO, format } from 'date-fns'

export default function FormattedDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy h:mm b')}</time>
}
