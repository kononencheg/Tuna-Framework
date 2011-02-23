<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    
    <xsl:template match="/">
		<xsl:apply-templates select="//text" />
	</xsl:template>
	
	<xsl:template match="text">
		<xsl:value-of select="." />
	</xsl:template>
	
</xsl:stylesheet>
