
<ul>
<li>app.controller.ts	Um controlador básico com uma única rota.</li>
<li>app.controller.spec.ts	Os testes de unidade para o controlador.</li>
<li>app.module.ts	O módulo raiz do aplicativo.</li>
<li>app.service.ts	Um serviço básico com um único método.</li>
<li>main.ts	O arquivo de entrada do aplicativo que usa a função principal NestFactorypara criar uma instância do aplicativo Nest.</li>
</ul>
</br>
</br>
<ul>
<li>Controladores
Os controladores são responsáveis ​​por lidar com solicitações recebidas e retornar respostas ao cliente.</li>
</ul>

<p>
Cada aplicativo tem pelo menos um módulo, um módulo raiz . O módulo raiz é o ponto de partida que o Nest usa para construir o gráfico do aplicativo - a estrutura de dados interna que o Nest usa para resolver os relacionamentos e dependências do módulo e do provedor. Embora aplicativos muito pequenos possam teoricamente ter apenas o módulo raiz, esse não é o caso típico. Queremos enfatizar que os módulos são fortemente recomendados como uma forma eficaz de organizar seus componentes. Assim, para a maioria dos aplicativos, a arquitetura resultante empregará vários módulos, cada um encapsulando um conjunto de recursos intimamente relacionado .

O @Module()decorador recebe um único objeto cujas propriedades descrevem o módulo:
</p>
</br>
</br>
<p>O módulo encapsula provedores por padrão. Isso significa que é impossível injetar provedores que não fazem parte diretamente do módulo atual nem exportados dos módulos importados. Assim, você pode considerar os provedores exportados de um módulo como a interface pública do módulo, ou API.

 </p>

<ul>
<li>providers	os provedores que serão instanciados pelo injetor Nest e que podem ser compartilhados pelo menos neste módulo</li>
<li>controllers	o conjunto de controladores definidos neste módulo que devem ser instanciados</li>
<li>imports	a lista de módulos importados que exportam os provedores que são necessários neste módulo</li>
<li>exports	o subconjunto dos providersque são fornecidos por este módulo e devem estar disponíveis em outros módulos que importam este módulo. Você pode usar o próprio provedor ou apenas seu token ( providevalor)</li>


</ul>

<p>@Global()decorador torna o módulo de escopo global. Os módulos globais devem ser registrados apenas uma vez , geralmente pelo módulo raiz ou núcleo. No exemplo acima, o CatsServiceprovedor será onipresente e os módulos que desejam injetar o serviço não precisarão importar o CatsModuleem seu array de importações.</p>