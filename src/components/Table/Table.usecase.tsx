import { TableBodyUsecaseEmptyTemplate, TableBodyUsecaseFull, TableBodyUsecaseRegBMSTU, TableBodyUsecaseRegVolonterHardaton, TableBodyUsecaseRegVolonterMero } from './components/TableBody/TableBody.usecase'
import { TableHeaderUsecaseNameAuthor } from './components/TableHeader/TableHeader.usecase'

export const TableUsecaseDefault = 
[
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
    TableBodyUsecaseFull,
]

export const TableUsecaseWithExamples = 
[
    TableHeaderUsecaseNameAuthor,
    TableBodyUsecaseEmptyTemplate,
    TableBodyUsecaseRegBMSTU,
    TableBodyUsecaseRegVolonterMero,
    TableBodyUsecaseRegVolonterHardaton,
]