import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function getTimePosting(createdAt: string) {
  const result = formatDistance(new Date(createdAt), new Date(), {
    locale: ptBR,
  })
  return result
}

export { getTimePosting }
