<?php

namespace DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Property;

use DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Comment\Commentable;
use DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Renderable;
/** @internal */
interface AtRule extends Renderable, Commentable
{
    /**
     * Since there are more set rules than block rules,
     * we’re whitelisting the block rules and have anything else be treated as a set rule.
     *
     * @var string
     */
    const BLOCK_RULES = 'media/document/supports/region-style/font-feature-values';
    /**
     * … and more font-specific ones (to be used inside font-feature-values)
     *
     * @var string
     */
    const SET_RULES = 'font-face/counter-style/page/swash/styleset/annotation';
    /**
     * @return string|null
     */
    public function atRuleName();
    /**
     * @return string|null
     */
    public function atRuleArgs();
}
