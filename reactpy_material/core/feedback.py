from pathlib import Path
from typing import Any
from reactpy import component
from reactpy.core.component import Component
from reactpy.web.module import export, module_from_file
from reactpy.core.types import VdomChild

from .utils import _parse_children

_js_module = module_from_file(
    "reactpy-material",
    file=Path(__file__).parents[1] / "bundle.js"
)

md_circular_progress = export(_js_module, "MDCircularProgress")
md_linear_progress = export(_js_module, "MDLinearProgress")
md_alert = export(_js_module, "MDAlert")

@component
def circular_progress(attrs: Any = {}):
    return md_circular_progress(attrs)

@component
def linear_progress(attrs: Any = {}):
    return md_linear_progress(attrs)

@component
def alert(*children: VdomChild, attrs: Any = {}):
    return md_alert(attrs, _parse_children(children))