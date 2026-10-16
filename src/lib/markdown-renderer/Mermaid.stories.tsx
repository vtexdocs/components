import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import components from './components'

const { pre: Pre, code: Code } = components

const flowchartShort = `flowchart TD
  A[Início] --> B{Decisão}
  B -->|Sim| C[Fim]
  B -->|Não| A`

const flowchartLongLabels = `flowchart LR
  A["Shopper acessa uma página de produto no storefront headless"] --> B["O storefront consulta a API de Intelligent Search para obter os dados do produto e dos SKUs disponíveis"]
  B --> C{"O produto está disponível para o canal de vendas configurado nesta loja?"}
  C -->|"Sim, existe estoque e preço válido"| D["Renderizar a página com o botão de compra habilitado"]
  C -->|"Não, produto indisponível ou sem preço"| E["Exibir mensagem informando que o produto está temporariamente indisponível"]`
const flowchartBr = `flowchart LR
  A["VTEX maps regions<br>and representative postal code"] --> B["Customer clicks<br>the ad"]
  B --> C{"Conector está em<br>Contingency Mode?"}`

const codeSemHighlight = `curl --request GET \\
  --url https://{accountName}.myvtex.com/api/catalog_system/pvt/products \\
  --header 'Content-Type: application/json'`

const MermaidPage = () => (
  <div style={{ maxWidth: 800, padding: 24 }}>
    <p style={{ color: '#E31C58' }}>
      Texto rosa. <span>Este span deve continuar rosa.</span>
    </p>

    <Pre node={{}} className="mermaid">
      {flowchartShort}
    </Pre>

    <p>Parágrafo ENTRE os dois diagramas.</p>

    <Pre node={{}} className="mermaid">
      {flowchartLongLabels}
    </Pre>

    <Pre node={{}} className="mermaid">
      {flowchartBr}
    </Pre>

    <p>
      Parágrafo DEPOIS dos diagramas, seguido de um code block sem highlight
      (equivalente a uma cerca sem linguagem no markdown).
    </p>

    <Pre node={{}}>
      <Code node={{}}>{codeSemHighlight}</Code>
    </Pre>

    <p>
      Parágrafo com <Code node={{}}>código inline</Code> no final.
    </p>
  </div>
)

const meta = {
  title: 'Example/MarkdownRenderer/Mermaid',
  component: MermaidPage,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MermaidPage>

export default meta
type Story = StoryObj<typeof meta>

export const TwoDiagramsAndLongLabels: Story = {}
