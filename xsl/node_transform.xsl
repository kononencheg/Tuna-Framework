<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    
    <xsl:template match="/">
		<xsl:apply-templates select="//item" />
	</xsl:template>
	
	<xsl:template match="item">
		<b>
			<xsl:value-of select="." />
		</b>
		
		<div>
			<xsl:attribute name="id">
				<xsl:text>container_</xsl:text>
				<xsl:value-of select="@id" />
			</xsl:attribute>
			- - - - -
		</div>
	</xsl:template>
	
</xsl:stylesheet>
