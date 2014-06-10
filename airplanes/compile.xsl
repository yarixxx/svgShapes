<xsl:stylesheet version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
  method="xml"
  doctype-public="-//W3C//DTD SVG 1.1//EN"
  doctype-system="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"/>

    <xsl:template match="/svgRoot" xmlns:xlink="http://www.w3.org/1999/xlink">
      <svg>
        <defs>
          <path id="trap"/> 
       	  <xsl:copy-of select="*[local-name() = 'path']"/>
       	  <xsl:copy-of select="*[local-name() = 'g']"/>
        </defs>

        <g id="airplaneList">        
          <xsl:apply-templates select="*[local-name() = 'g']" />
        </g>

        <g id="animationFrame"></g>
        <script xlink:href="airplaneResult.js"></script>  
      </svg>
    </xsl:template>

    <xsl:template match="*[local-name() = 'g']" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use y="100" x="{position() * 100}" xlink:href="#{@id}" />
    </xsl:template>

</xsl:stylesheet>
